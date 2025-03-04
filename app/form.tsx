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
}

export default function HostRegistration() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        whatsapp: '',
        location: '',
        properties: '1-5',
        channelManager: 'Icnea',
        otherCM: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbw8hQ320HXYcTxc8yHLj0GpXP4pq_sq3Cgta3dMIoeUhfAKLV7r9wznN6t17m54a-BiJQ/exec', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            await response.json();
            alert('Thank you for registering! 🎉');
            setFormData({
                fullName: '',
                email: '',
                whatsapp: '',
                location: '',
                properties: '1-5',
                channelManager: 'Icnea',
                otherCM: ''
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold">Register Your Property with Viste AI</h2>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <label>Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border rounded" />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />

                <label>WhatsApp Number:</label>
                <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required className="w-full p-2 border rounded" />

                <label>Location (City & Country):</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full p-2 border rounded" />

                <label>Number of Properties:</label>
                <select name="properties" value={formData.properties} onChange={handleChange} className="w-full p-2 border rounded">
                    {['1-5', '6-10', '11-20', '21-50', '51+'].map(option => <option key={option} value={option}>{option}</option>)}
                </select>

                <label>Channel Manager:</label>
                <select name="channelManager" value={formData.channelManager} onChange={handleChange} className="w-full p-2 border rounded">
                    {['Icnea', 'Guesty', 'Smoobu', 'Hostaway', 'Rentals United', 'Other'].map(option => <option key={option} value={option}>{option}</option>)}
                </select>

                {formData.channelManager === 'Other' && (
                    <>
                        <label>If Other, specify:</label>
                        <input type="text" name="otherCM" value={formData.otherCM} onChange={handleChange} className="w-full p-2 border rounded" />
                    </>
                )}

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
}
