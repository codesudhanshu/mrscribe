import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { FaPause } from 'react-icons/fa';
import { BsRecordCircle, BsStopCircle } from 'react-icons/bs';
import {Button, TextField} from '@mui/material'
import axios from 'axios'

function Scribe() {

  const[transcribe, settranscribe] = useState('')
  function handletranscribe(event)
  {
    settranscribe(event.target.value)
  }

  async function startTranscription() {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
  
    recognition.onresult = async (event) => {
      const speechToText = event.results[0][0].transcript;
      console.log(speechToText);
  
      const url = 'https://api.whisper.sh/transcribe';
      const data = { text: speechToText };
      const headers = { 'X-Whisper-API-Key': 'sk-6jbMO4RsddQXnZLdYkA6T3BIbkFJdaCXsYu5Ty8IROjPhKMA' };
  
      try {
        const response = await axios.post(url, data, { headers });
        const transcription = response.data.transcription;
        console.log(transcription);
      } catch (error) {
        console.error(error);
      }
    };
  }


  return (
    <div>
       <div className='navigation'>
       <div>
            <h1 className='navigation-head'>Mr. Scribe</h1>
        </div>
        <div className='navigation-bar'>
           <Link to='/files' className='navigation-saved' >Saved Files</Link>
        </div>
       </div>
       <div className='heading'>
       <h1>Hello! Allow me to transcribe what you say</h1>
       </div>
    <div className='icons-points'>
        <h4>Click The Button to Start Transcription</h4>
    <div>
  <abbr title='Start Recording'>
  <BsRecordCircle size={100} color='red' onClick={startTranscription}/>
  </abbr>
    </div>
      <div className='icons-clo'>
      <abbr title='pouse'>
        <FaPause size={32} />
        </abbr>
    <abbr title='stop'>
    <BsStopCircle size={32} />
    </abbr>
    </div>
    </div>
    <div className='text-data'>
        <TextField placeholder="Transcripted Data" id='text' className='text-content' rows={10} multiline={true} value={transcribe} onChange={handletranscribe}/>
        <Button variant="contained" color="primary" sx={{mt:2,ml:32}}>Save</Button>
    </div>
        <div className='footer'>
        <div className='datafield-name'>
            <h1 className='last-data'>Mr. Scribe</h1>
            <h3 className='navigation-head' >@TheAlgohype.com</h3>
        </div>
        <div className='icons'>
            <SocialIcon className='social-media' url="https://www.instagram.com/thealgohype/?hl=en" />
            <SocialIcon className='social-media' url="https://www.linkedin.com/company/algohype/" />
            <SocialIcon className='social-media' url="https://twitter.com/theAlgoHype" /> 
        </div>
        </div>
    </div>
  )
}

export default Scribe
