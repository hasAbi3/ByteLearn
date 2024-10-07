import { useState } from "react";
import {useEffect } from "react";
import "./Card.css";

const Card = () =>
    {
        const [currentCard, setCurrentCard] = useState(0);
        const [showAnswer, setShowAnswer] = useState(false);
        const [inputValue, setInputValue] = useState('');
        const [feedback, setFeedback] = useState('');

        //Array of flashcards
        const[Flashcards, setFlashcards] = useState([
            {question: "A programming technique where a function calls itself to solve a problem.", answer: "Recursion"},
                    {question: "A linear data structure that stores a collection of elements of the same data type.", answer : "Array"},
                    {question: "A sequence of characters, typically used to represent text", answer : "String"},
                    {question: "A linear data structure that stores data in nodes, which are connected by pointers", answer: "Linked Lists"},
                    {question: "The concept of bundling data with methods", answer:"Encapsulation"},
                    {question : "The programming concept that allows tasks to run concurrently", answer: "Asynchronous"},
                    {question: "The data structure that uses LIFO(Last-In-First-Out)approach", answer: "Stack"},
                    {question: "Time complexity of binary search", answer:"O(logn)"},
                    {question: "The data structure that uses FIFO(Last-In-First-Out)approach", answer: "Queue"},
                    {question: "A type of tree where each node has at most two children", answer: "Binary"},
                    {question: "A data structure that maps keys to values and allows fast retrieval",answer: "HashTable"},
                    {question: "A data structure consisting of nodes where each node can have zero or more child nodes", answer: "Graph"},
                    {question: "A type of heap where each parent node is greater than its child nodes",answer: "MaxHeap"},
                    {question: "A type of heap where each parent node is less than its child nodes",answer: "MinHeap"},
                    {question: "A type of graph where there is a path between any pair of nodes",answer: "Connected"},
                    {question: "A database that uses key-value pairs to store data and is often used for caching and high-speed retrieval", answer: "NoSQL"},
                    {question: "An operation in a database that involves combining rows from two or more tables based on a related column", answer: "Join"},
                    {question: "A type of SQL operation used to add new rows of data to a database table", answer: "Insert"},
                    {question: "A database design principle that involves dividing a database into smaller tables to minimize redundancy", answer: "Decomposition"},
                    {question: "A command used in SQL to retrieve data from one or more tables based on specified criteria", answer: "Select"}, 
                    {Question: "A database operation used to remove rows from a table based on a specified condition", answer: "Delete"},
                    {question: "A database concept where data is organized into tables with predefined columns and types", answer: "Schema"},
                    {question: "A data manipulation language command used to modify existing records in a database", answer: "Update"},
                    {question: "A type of SQL operation used to add new rows of data to a database table", answer: "Insert"}, 
                    {question: "A unique identifier assigned to each row in a database table to ensure each record is distinct", answer: "PrimaryKey"}]);


        const shuffleArray = (array) => {
            let currentIndex = array.length, randomIndex;
            while ( currentIndex !== 0)
            {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array;
        }

        const handleShuffle= () => {
            setFlashcards(prevFlashcards => shuffleArray([...prevFlashcards]));
            setCurrentCard(0);
        }

        const toggleCard = () => 
            {
                setShowAnswer(!showAnswer);
            }

        const nextCard = () =>
            {
                if (currentCard < Flashcards.length -1 ){
                    setCurrentCard(currentCard + 1);
                    setShowAnswer(false);
                    setFeedback('');
                    setInputValue('');
                }

            }

        const prevCard = () =>
            {
                if (currentCard > 0){
                    setCurrentCard(currentCard -1);
                    setShowAnswer(false);
                    setFeedback('');
                    setInputValue('');}
            }

        const onSubmit = () => {
            if (inputValue.trim().toLowerCase() === Flashcards[currentCard].answer.toLowerCase()) {
                setFeedback('Correct!');
                
              } else if (inputValue.trim() !== '') {
                setFeedback('Incorrect, try again.');
              } else {
                setFeedback('');
              }
        }
        return(
            <>
                <div className="card-wrapper">

                    <button className= "nav-button" onClick={prevCard}> Back</button>
                    <div className="card-container">
                        <div className="Flashcard" onClick={toggleCard}>

                            {showAnswer?
                            (
                                <div className="answer"> {Flashcards[currentCard].answer}</div>
                            ): (<div className="question">{Flashcards[currentCard].question}</div>)
                            }
                        </div>
                    </div>

                    <button className= "nav-button" onClick={nextCard}> Next</button><br></br>
                </div>
                
                <h2>Guess your answer here: </h2>
                <input type="text" 
                label ="Place your answer here"
                value = {inputValue}
                onChange = {(e) => setInputValue(e.target.value)}/>
                <button onClick={() => {
                    onSubmit()}}>Submit</button><br></br>

                <div>{feedback}</div>
                <button>{currentCard + 1} / {Flashcards.length}</button><br></br> 
                <button onClick= {handleShuffle}> Shuffle</button>   
            </>
        
        
        )
    }

export default Card;