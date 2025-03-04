'use client';

import { useState, FormEvent } from 'react';

interface FormData {
    fullName: string;
    email: string;
    whatsapp: string;
    location: string;
    properties: string;
    channelManager: string;
    otherCM: string;
    features: string[];
    startDate: string;
    demoCall: string;
    comments: string;
}

export default function HostRegistration() {
    const depUrl = `https://script.google.com/macros/s/AKfycbwIcEP2cqAb6kgbXmr4yRs7qz0BiQ_y2MCbt4OgKx_Ugko1n_pXgQFEiDlS9Ogf6v3F9w/exec`; // Replace with your Web App URL

    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        whatsapp: '',
        location: '',
        properties: '1-5',
        channelManager: 'Icnea',
        otherCM: '',
        features: [],
        startDate: 'Immediately',
        demoCall: 'Yes',
        comments: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                features: checked ? [...prev.features, value] : prev.features.filter(f => f !== value)
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log("Submitting form data:", formData);

        try {
            const response = await fetch(depUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Response from Google Apps Script:", result);

            if (result.status === "success") {
                alert(result.message || 'Thank you for registering! 🎉');
                setFormData({
                    fullName: '',
                    email: '',
                    whatsapp: '',
                    location: '',
                    properties: '1-5',
                    channelManager: 'Icnea',
                    otherCM: '',
                    features: [],
                    startDate: 'Immediately',
                    demoCall: 'Yes',
                    comments: ''
                });
            } else {
                throw new Error(result.error || 'Unknown error from Google Apps Script');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please check the console for details.');
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold">Register Your Property</h2>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <label>Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border rounded" />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />

                <label>WhatsApp Number:</label>
                <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required className="w-full p-2 border rounded" />

                <label>Comments:</label>
                <textarea name="comments" value={formData.comments} onChange={handleChange} className="w-full p-2 border rounded"></textarea>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
}
