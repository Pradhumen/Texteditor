import React,{useState} from 'react'


const Textarea = () => {

    const [text,setText] = useState("Enter your text");
    const handleUpperCase = () => {
        setText(text.toUpperCase())
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        let newText = event.target.value;
        setText(newText)
    }
  return (
    <>
        <div className="container my-5">
            <h3>This your Textarea</h3>
            <textarea className="form-control mx-2 my-3" value={text} onChange={handleOnChange} placeholder="text" rows="8"></textarea>
            <p>Word Count : {text.split(" ").length}</p>
            <p>Charactors : {text.length}</p>
            <p>Time To Read : {text.length * 0.008 } Minutes</p>
            <button className='btn btn-success mx-2 my-2' onClick={handleUpperCase}>Change Text to UpperCase</button>
            <button className='btn btn-success mx-2 my-2' onClick={handleLowerCase}>Change Text to UpperCase</button>
        </div>
    </>
  )
}

export default Textarea