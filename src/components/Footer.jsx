
        import React from "react";
        import { assets } from "../assets/assets";
        
        const Footer = () => {
            return (
                <div className="md:mx-10">
                    <div className="flex flex-col items-center gap-8 py-16 text-gray-800" id="FooterContent">

                        <p className="sm:w-1/3 text-center text-sm">
                            Learn more about our services and how to reach us.
                        </p>
        
                        <table className="w-full max-w-5xl mx-auto text-gray-800 text-left">
                            <tbody>
                                <tr>
                                    <td className="px-4 py-4">
                                        <img
                                            className="mb-5 w-40 mx-auto sm:mx-0"
                                            src={assets.Healthlogo}
                                            alt="Logo"
                                            width="20%"
                                        />
                                        <p className="w-full md:w-2/3 text-gray-600 leading-6 mx-auto sm:mx-0">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type.
                                        </p>
                                    </td>
                                    <td className="px-4 py-4">
                                        <p>COMPANY</p>
                                        <ul >
                                            <li>Home</li>
                                            <li>About Us</li>
                                            <li>Contact Us</li>
                                            <li>Privacy Policy</li>
                                        </ul>
                                    </td>
                                    <td className="px-4 py-4">
                                        <p >Get In Touch</p>
                                        <ul className="flex flex-col gap-2 text-gray-600">
                                            <li>+1-212-456-7890</li>
                                            <li>greatstackdev@gmail.com</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        
                    <div className="w-full">
                        <hr />
                        <p className="py-5 text-sm text-center">
                            Copyright 2024 @ Jomnas - All Rights Reserved
                        </p>
                    </div>
                </div>
            );
        };
        
        export default Footer;
        