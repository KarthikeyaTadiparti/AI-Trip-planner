import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-16 py-4 border-b">
            <Link to="/" className="text-2xl font-semibold text-red-500">
                TripMate
            </Link>
            <div className="flex justify-center items-center space-x-12 font-normal text-base">
                <Link to="/">Home</Link>
                <Link to="/mytrips">My Trips</Link>
                <Link to="/new">New Trip</Link>
                <Link to="/auth/login">Log in</Link>
                <Button className={"bg-red-500"}>
                    <Link to="/auth/signup">Sign up</Link>
                </Button>
            </div>
        </nav>
    );
}

export default Navbar;
