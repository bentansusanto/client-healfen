'use client'
import { useEffect } from "react";
import AOS from 'aos';

export const AOSSetup = () => {
    
    useEffect(() => {
        AOS.init();
    },[])
}