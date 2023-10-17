'use client'

import React, { FormEventHandler, useState } from "react";
import { Button } from "@/components/ui/button";
import { validateEmail } from "@/utils/validate";

interface FormProps {
    firstName: string,
    lastName?: string,
    email: string,
    password: string,
    role: string
}

const Basic = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        return (
            firstName && 
            validateEmail(email) &&
            password.value.length >= 8 &&
            role !== "role"
        );
    };

    const clearForm = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword({value: "", isTouched: false})
        setRole("role")
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log(values);
        alert('Form sent')
        clearForm()
    }

    return (
        <div className="flex m-auto justify-center items-center">
            <form onSubmit={handleSubmit} className="max-w-2xl min-w-md md:w-2/3 sm:w-full p-14 xs:p-4 border-2 shadow-2xl border-black rounded-lg">
                <fieldset className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Sign Up</h2>
                    <div className="Field flex flex-col gap-4">
                        <label className="pr-10">
                            First name
                        </label>
                        <input value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                         className="border-2 border-black p-2 rounded-lg" placeholder="First name" />
                    </div>
                    <div className="Field flex flex-col gap-4">
                        <label>Last name</label>
                        <input
                         className="border-2 border-black p-2 rounded-lg" 
                         value={lastName} 
                         onChange={(e) => { 
                           setLastName(e.target.value); 
                         }} 
                         placeholder="Last name" />
                    </div>
                    <div className="Field flex flex-col gap-4">
                        <label>
                            Email address
                        </label>
                        <input className="border-2 border-black p-2 rounded-lg" placeholder="Email address"
                         value={email} 
                         onChange={(e) => { 
                           setEmail(e.target.value); 
                         }} 
                        />
                    </div>
                    <div className="Field flex flex-col gap-4">
                        <label>
                            Password
                        </label>
                        <input
                        type="password" className="border-2 border-black p-2 rounded-lg" placeholder="Password"
                        value={password.value}
                        onChange={(e) => { 
                            setPassword({ ...password, value: e.target.value }); 
                          }} 
                          onBlur={() => { 
                            setPassword({ ...password, isTouched: true }); 
                          }} 
                        />
                        {password.isTouched && password.value.length < 8 ? 
                        <span>Password should have at least 8 characters</span>
                        : null}
                    </div>
                    <div className="Field flex flex-col gap-4">
                        <label>
                            Role
                        </label>
                        <select
                        className="border-2 border-black p-2 rounded-lg"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <Button
                        type="submit"
                        disabled={!getIsFormValid()}
                    >
                        Create account
                    </Button>
                </fieldset>
            </form>
            </div>
    );
}

export default Basic;