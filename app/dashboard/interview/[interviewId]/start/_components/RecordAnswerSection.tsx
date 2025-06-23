'use client';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Button } from '@/components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react';

function RecordAnswerSection() {
  const [userAnswer, setUserAnswer] = useState('');
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: true,
  });

  useEffect(() => {
    results.forEach((result) => {
      if (typeof result === 'string') {
        setUserAnswer((prev) => prev + result);
      } else if ('transcript' in result) {
        setUserAnswer((prev) => prev + result.transcript);
      }
    });
  }, [results]);

  // Debug logs
  console.log("🎙️ Results:", results);
  console.log("⏳ Interim:", interimResult);
  console.log("🎥 Recording:", isRecording);
  console.log("⚠️ Error:", error);

  return (
    <div>
      <Webcam
        mirrored={true}
        audio={true}
        style={{
          height: 300,
          width: '100%',
          zIndex: 10,
        }}
      />

      <Button
        variant="outline"
        className="my-10"
        onClick={isRecording ? stopSpeechToText : startSpeechToText}
      >
        {isRecording ? (
          <span className="flex items-center gap-2">
            <Mic /> Recording...
          </span>
        ) : (
          'Start Recording'
        )}
      </Button>

      <Button onClick={() => console.log(userAnswer)}>Show user Answer</Button>
    </div>
  );
}

export default RecordAnswerSection;
