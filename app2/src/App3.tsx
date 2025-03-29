import React, {useState} from "react";
import {loadAllPosts} from "./service/postService";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function App3(){

    const loadData = async () => {
        try {
            const response = await loadAllPosts();
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
    
    return (    
        <>
            <button
                onClick={loadData}>
                Load All Posts
            </button>
            <hr />
        </>
    )
}
export default App3;

function loadAllPosts() {
    throw new Error("Function not implemented.");
}
