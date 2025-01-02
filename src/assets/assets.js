// Importing all assets
import Image from "./OIP (8).jpg";
import OIP from"./OIP (7).jpg";
import portait from "./portrait-shot-smiling-male-doctor-standing-hospital-background-generative-ai_292610-488.jpg";
import Myprofile from "./Myprofile.png";
import logo from "./logo.jpg";
import arrow_icon from './arrow_icon.svg';
import dropdown_icon from './dropdown_icon.svg';
import header from "./R.jpg";
import profile from"./profile.png";
import Header from"./header.jpg";
import groupimage from "./group image.jpg";
import Dermatologist from"./download (4).jpg";
import Internal_Medicine from"./OIP (15).jpg";
import Medical_Plastic_Surgery from"./OIP (13).jpg";
import appointment from"./appointment.jpg";
import Healthlogo from"./HealthWellness-midsize.jpg";
import verfied_icon from "./verfied_icon.svg";
import info_icon from"./info_icon.svg";

export const assets = {
    Image,
    portait,
   Myprofile,
    Healthlogo,
    logo,
    arrow_icon,
    dropdown_icon,
    header,
    profile,
    Header,
    groupimage,
    Dermatologist,
    Internal_Medicine,
    Medical_Plastic_Surgery,
    OIP,
    appointment,
    verfied_icon,
    info_icon,

};
export const SpecialityData =[
    {
    
        Speciality:"Dermatologist",
        image:assets.Dermatologist,
        





    },

    {

    Speciality:"Internal medicine",
    image: assets.Internal_Medicine,

    },

    {


        "Speciality":"Plastic surgeon",
        image:assets.Medical_Plastic_Surgery,


        }



 ]




// Doctors data with references to assets
export const Doctors = [
    {
        _id: "doc1",
        name: "Dr Lordiana Rimmaudo",
        image: assets.OIP, // Reference the imported `Image`
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr Lordiana is very nice and you can feel comfortable speaking with her and she also gives a very good herbal medicine",
        fees: 60,
        address: "16 Charly Street, 52234 Aachen, Germany",
    },
    {
        _id: "doc2",
        name: "Dr William Edres",
        image: assets.Image, // Reference the imported `portait` image
        speciality: "Internal Medicine",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr William is very helpful and very professional at his work",
        fees: 50,
        address: "16 Charly Street, 52234 Aachen, Germany",
    },
    {
        _id: "doc3",
        name: "Dr Ronald Swarwoski",
        image: assets.portait, // Reference the imported `portait` image
        speciality: "Plastic Surgeon",
        degree: "MBBS",
        experience: "8 years",
        about: "Dr Ronald is very professional at his work",
        fees: 70,
        address: "16 Charly Street, 52234 Aachen, Germany",
    },
];
