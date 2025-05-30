import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Navbar from '../common/Navbar';
import AnimatedContainer from '../common/AnimatedContainer';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

const TimerTabs = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
`;

const TimerTab = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#6c5ce7' : '#666'};
  cursor: pointer;
  border-bottom: ${props => props.active ? '2px solid #6c5ce7' : 'none'};
  margin-bottom: -1px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #6c5ce7;
  }
`;

const TimerCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const TimerDisplay = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const TimerMessage = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const TimerControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const TimerButton = styled.button`
  background-color: ${props => props.secondary ? 'transparent' : '#6c5ce7'};
  color: ${props => props.secondary ? '#6c5ce7' : 'white'};
  border: ${props => props.secondary ? '1px solid #6c5ce7' : 'none'};
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.secondary ? '#f0f0ff' : '#5a4ad1'};
  }
`;

const ProgressSection = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ProgressCard = styled.div`
  background-color: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`;

const ProgressIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #6c5ce7;
  font-size: 1.5rem;
`;

const ProgressValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProgressLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const SettingsSection = styled.div`
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const SettingItem = styled.div`
  display: grid;
  grid-template-columns: 2.5rem 1fr 140px;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
  background: #f8f9ff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(80,80,180,0.06);
  padding: 1.2rem 1.5rem;
  border: 1.5px solid #ececff;
  transition: box-shadow 0.2s, border 0.2s;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 2.5rem;
    right: 1.5rem;
    bottom: -0.75rem;
    height: 1px;
    background: #ececff;
    border-radius: 1px;
    opacity: 0.7;
  }

  &:hover {
    box-shadow: 0 4px 16px rgba(108, 92, 231, 0.10);
    border: 1.5px solid #d1d1f7;
  }
`;

const SettingIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e6e6ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #6c5ce7;
  font-size: 1.2rem;
`;

const SettingContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SettingTitle = styled.h3`
  font-size: 1.08rem;
  font-weight: 600;
  margin-bottom: 0.18rem;
  color: #3a3a4d;
`;

const SettingValue = styled.div`
  font-size: 0.97rem;
  color: #8b8bb0;
  font-weight: 400;
`;

const SettingControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 120px;
`;

const SelectDropdown = styled.select`
  width: 100%;
  min-width: 120px;
  max-width: 160px;
  padding: 0.6rem 1.2rem 0.6rem 0.8rem;
  border: 1.2px solid #d1d1f7;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 1.08rem;
  color: #333;
  background: #f4f6ff url('data:image/svg+xml;utf8,<svg fill=\"%236c5ce7\" height=\"16\" viewBox=\"0 0 24 24\" width=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>') no-repeat right 0.7rem center/1rem 1rem;
  box-shadow: 0 1px 3px rgba(80,80,180,0.05);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: border 0.2s, box-shadow 0.2s;
  margin-bottom: 0;

  &:focus {
    outline: none;
    border: 1.2px solid #6c5ce7;
    box-shadow: 0 2px 6px rgba(108, 92, 231, 0.07);
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  margin-bottom: 1.2rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d1d1f7;
  transition: .4s;
  border-radius: 22px;
  box-shadow: 0 2px 6px rgba(108, 92, 231, 0.07);

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(80,80,180,0.08);
    border: 2px solid #e6e6ff;
  }

  input:checked + & {
    background-color: #6c5ce7;
  }

  input:checked + &:before {
    transform: translateX(18px);
    border: 2px solid #6c5ce7;
  }
`;

const PomodoroTimer = () => {
  const [activeTab, setActiveTab] = useState('focus');
  const [isRunning, setIsRunning] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoStartBreaks, setAutoStartBreaks] = useState(false);
  
  const [focusDuration, setFocusDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  
  const [time, setTime] = useState(focusDuration * 60);
  const timerRef = useRef(null);
  const audioRef = useRef(new Audio(process.env.PUBLIC_URL + '/simple-notification-152054.mp3'));
  const notificationTimeoutRef = useRef(null);

  const playNotificationSound = () => {
    if (soundEnabled) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log("Audio error:", e));
    }
  };

  const showVisualNotifications = (message) => {
    // Clear any pending notifications
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }

    // Browser notification
    if (Notification.permission === 'granted') {
      new Notification(message);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(message);
        }
      });
    }
    
    // Alert after slight delay
    notificationTimeoutRef.current = setTimeout(() => {
      alert(message);
    }, 300);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Update timer when settings change
  useEffect(() => {
    if (activeTab === 'focus') {
      setTime(focusDuration * 60);
    } else if (activeTab === 'short-break') {
      setTime(shortBreakDuration * 60);
    } else if (activeTab === 'long-break') {
      setTime(longBreakDuration * 60);
    }
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  }, [activeTab, focusDuration, shortBreakDuration, longBreakDuration]);

  // Timer logic
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            
            const message = activeTab === 'focus' 
              ? 'Focus session complete! Time for a break.' 
              : 'Break over! Ready to focus again?';
            
            // Play sound immediately
            playNotificationSound();
            
            // Show visual notifications after sound starts
            showVisualNotifications(message);

            // Handle focus session completion
            if (activeTab === 'focus') {
              const newCount = completedPomodoros + 1;
              setCompletedPomodoros(newCount);
              
              // Auto-start breaks if enabled
              if (autoStartBreaks) {
                const nextTab = newCount % 4 === 0 ? 'long-break' : 'short-break';
                setActiveTab(nextTab);
                setTimeout(() => {
                  setIsRunning(true);
                }, 1000);
              }
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, activeTab, autoStartBreaks, completedPomodoros, soundEnabled]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    if (activeTab === 'focus') {
      setTime(focusDuration * 60);
    } else if (activeTab === 'short-break') {
      setTime(shortBreakDuration * 60);
    } else if (activeTab === 'long-break') {
      setTime(longBreakDuration * 60);
    }
    setIsRunning(false);
  };

  const handleFocusChange = (e) => {
    const newDuration = parseInt(e.target.value);
    setFocusDuration(newDuration);
    if (activeTab === 'focus') {
      setTime(newDuration * 60);
    }
  };

  const handleShortBreakChange = (e) => {
    const newDuration = parseInt(e.target.value);
    setShortBreakDuration(newDuration);
    if (activeTab === 'short-break') {
      setTime(newDuration * 60);
    }
  };

  const handleLongBreakChange = (e) => {
    const newDuration = parseInt(e.target.value);
    setLongBreakDuration(newDuration);
    if (activeTab === 'long-break') {
      setTime(newDuration * 60);
    }
  };

  const totalFocusTime = completedPomodoros * focusDuration;
  const totalBreakTime = completedPomodoros * shortBreakDuration;

  return (
    <>
      <Navbar isLoggedIn={true} />
      <Container>
        <AnimatedContainer delay="0.05s">
          <PageTitle>Pomodoro Timer</PageTitle>
        </AnimatedContainer>
        <AnimatedContainer delay="0.1s">
          <TimerTabs>
            <TimerTab 
              active={activeTab === 'focus'} 
              onClick={() => setActiveTab('focus')}
            >
              Focus
            </TimerTab>
            <TimerTab 
              active={activeTab === 'short-break'} 
              onClick={() => setActiveTab('short-break')}
            >
              Short Break
            </TimerTab>
            <TimerTab 
              active={activeTab === 'long-break'} 
              onClick={() => setActiveTab('long-break')}
            >
              Long Break
            </TimerTab>
          </TimerTabs>
        </AnimatedContainer>
        <AnimatedContainer delay="0.15s">
          <TimerCard>
            <TimerDisplay>{formatTime(time)}</TimerDisplay>
            <TimerMessage>
              {activeTab === 'focus' ? 'Focus on your task' : 
               activeTab === 'short-break' ? 'Take a short break' : 'Take a long break'}
            </TimerMessage>
            <TimerControls>
              {!isRunning ? (
                <TimerButton onClick={handleStart}>Start</TimerButton>
              ) : (
                <TimerButton onClick={handlePause}>Pause</TimerButton>
              )}
              <TimerButton secondary onClick={handleReset}>Reset</TimerButton>
            </TimerControls>
          </TimerCard>
        </AnimatedContainer>
        <AnimatedContainer delay="0.2s">
          <ProgressSection>
            <SectionTitle>Today's Progress</SectionTitle>
            <ProgressGrid>
              <ProgressCard>
                <ProgressIcon>⏱️</ProgressIcon>
                <ProgressValue>{completedPomodoros}</ProgressValue>
                <ProgressLabel>Completed Pomodoros</ProgressLabel>
              </ProgressCard>
              
              <ProgressCard>
                <ProgressIcon>⏳</ProgressIcon>
                <ProgressValue>{totalFocusTime} min</ProgressValue>
                <ProgressLabel>Total Focus Time</ProgressLabel>
              </ProgressCard>
              
              <ProgressCard>
                <ProgressIcon>☕</ProgressIcon>
                <ProgressValue>{totalBreakTime} min</ProgressValue>
                <ProgressLabel>Total Break Time</ProgressLabel>
              </ProgressCard>
            </ProgressGrid>
          </ProgressSection>
        </AnimatedContainer>
        <AnimatedContainer delay="0.25s">
          <SettingsSection>
            <SectionTitle>Settings</SectionTitle>
            <SettingItem>
              <SettingIcon>⏱️</SettingIcon>
              <SettingContent>
                <SettingTitle>Focus Duration</SettingTitle>
                <SettingValue>{focusDuration} minutes</SettingValue>
              </SettingContent>
              <SettingControl>
                <SelectDropdown 
                  value={focusDuration}
                  onChange={handleFocusChange}
                >
                  <option value="15">15 minutes</option>
                  <option value="20">20 minutes</option>
                  <option value="25">25 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                </SelectDropdown>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <SettingIcon>☕</SettingIcon>
              <SettingContent>
                <SettingTitle>Short Break</SettingTitle>
                <SettingValue>{shortBreakDuration} minutes</SettingValue>
              </SettingContent>
              <SettingControl>
                <SelectDropdown
                  value={shortBreakDuration}
                  onChange={handleShortBreakChange}
                >
                  <option value="3">3 minutes</option>
                  <option value="5">5 minutes</option>
                  <option value="10">10 minutes</option>
                  <option value="15">15 minutes</option>
                </SelectDropdown>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <SettingIcon>🛋️</SettingIcon>
              <SettingContent>
                <SettingTitle>Long Break</SettingTitle>
                <SettingValue>{longBreakDuration} minutes</SettingValue>
              </SettingContent>
              <SettingControl>
                <SelectDropdown
                  value={longBreakDuration}
                  onChange={handleLongBreakChange}
                >
                  <option value="15">15 minutes</option>
                  <option value="20">20 minutes</option>
                  <option value="25">25 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                </SelectDropdown>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <SettingIcon>🔔</SettingIcon>
              <SettingContent>
                <SettingTitle>Sound Notifications</SettingTitle>
                <SettingValue>{soundEnabled ? 'Enabled' : 'Disabled'}</SettingValue>
              </SettingContent>
              <SettingControl>
                <ToggleSwitch>
                  <input 
                    type="checkbox" 
                    checked={soundEnabled}
                    onChange={() => setSoundEnabled(!soundEnabled)}
                  />
                  <Slider />
                </ToggleSwitch>
              </SettingControl>
            </SettingItem>
            
            <SettingItem>
              <SettingIcon>🔄</SettingIcon>
              <SettingContent>
                <SettingTitle>Auto-start Breaks</SettingTitle>
                <SettingValue>{autoStartBreaks ? 'Enabled' : 'Disabled'}</SettingValue>
              </SettingContent>
              <SettingControl>
                <ToggleSwitch>
                  <input 
                    type="checkbox" 
                    checked={autoStartBreaks}
                    onChange={() => setAutoStartBreaks(!autoStartBreaks)}
                  />
                  <Slider />
                </ToggleSwitch>
              </SettingControl>
            </SettingItem>
          </SettingsSection>
        </AnimatedContainer>
      </Container>
    </>
  );
};

export default PomodoroTimer;