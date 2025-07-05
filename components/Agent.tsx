import React from 'react';
import Image from "next/image";
import { cn } from "@/lib/utils";

enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
}

interface AgentProps {
    userName: string;
}

const Agent = ({ userName }: AgentProps) => {
    const ispeaking = true;
    const callstatus = CallStatus.INACTIVE;
    const messages = [
        'Whats your name?',
        'My Name is John Doe nice to meet you!'
    ];

    const lastmessage = messages[messages.length - 1];

    return (
        <>
            <div className="call-view">
                <div className="card-interviewer">
                    <div className="avatar">
                        <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover" />
                        {ispeaking && <span className="animate-speak" />}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>
                <div className="card-border">
                    <div className="card-content">
                        <Image
                            src="/user-avatar.png"
                            alt="profile-image"
                            width={539}
                            height={539}
                            className="rounded-full object-cover size-[120px]"
                        />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>
            {messages.length > 0 && (
                <div className="transcript-border">
                    <div className='transcript'>
                        <p key={lastmessage}  className={cn(
                            "transition-opacity duration-500 opacity-0",
                            "animate-fadeIn opacity-100"
                        )}>
                            {lastmessage}
                        </p>
                    </div>
                </div>
            )}
            <div className="w-full flex justify-center">
                {callstatus !== 'ACTIVE' ? (
                    <button className="relative btn-call">
                        <span className={cn('absolute animate-ping rounded-full opacity-75', callstatus !== 'CONNECTING' && 'hidden')}>
                            {/* Ping animation content */}
                        </span>
                        <span>
                            {callstatus === 'INACTIVE' || callstatus === 'FINISHED' ? 'Call' : '...'}
                        </span>
                    </button>
                ) : (
                    <button className="btn-disconnect">
                        END
                    </button>
                )}
            </div>
        </>
    );
}

export default Agent;