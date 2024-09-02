'use strict';

function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = 'Unknown';
  let fullVersion = 'Unknown';

  if (userAgent.indexOf('Chrome') > -1) {
    browserName = 'Google Chrome';
    fullVersion = userAgent
      .substring(userAgent.indexOf('Chrome') + 7)
      .split(' ')[0];
  } else if (userAgent.indexOf('Firefox') > -1) {
    browserName = 'Mozilla Firefox';
    fullVersion = userAgent.substring(userAgent.indexOf('Firefox') + 8);
  } else if (userAgent.indexOf('Safari') > -1) {
    browserName = 'Apple Safari';
    fullVersion = userAgent
      .substring(userAgent.indexOf('Version') + 8)
      .split(' ')[0];
  } else if (
    userAgent.indexOf('MSIE') > -1 ||
    userAgent.indexOf('Trident/') > -1
  ) {
    browserName = 'Internet Explorer';
    fullVersion = userAgent
      .substring(userAgent.indexOf('MSIE') + 5)
      .split(';')[0];
  }

  return `${browserName}, ${fullVersion}`;
}

function getOSInfo() {
  const userAgent = navigator.userAgent;

  if (userAgent.indexOf('Windows NT 10.0') > -1) return 'Windows 10';
  if (userAgent.indexOf('Windows NT 6.2') > -1) return 'Windows 8';
  if (userAgent.indexOf('Windows NT 6.1') > -1) return 'Windows 7';
  if (userAgent.indexOf('Windows NT 6.0') > -1) return 'Windows Vista';
  if (userAgent.indexOf('Mac') > -1) return 'MacOS';
  if (userAgent.indexOf('X11') > -1) return 'UNIX';
  if (userAgent.indexOf('Linux') > -1) return 'Linux';

  return 'Unknown';
}

function formatDate() {
  const now = new Date();
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return now.toLocaleDateString('fi-FI', options);
}

function formatTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function displayInfo() {
  const target = document.getElementById('target');

  const browserInfo = getBrowserInfo();
  const osInfo = getOSInfo();
  const screenWidth = screen.width;
  const screenHeight = screen.height;
  const availableWidth = window.innerWidth;
  const availableHeight = window.innerHeight;
  const currentDate = formatDate();
  const currentTime = formatTime();

  target.innerHTML = `
        <p>Browser: ${browserInfo}</p>
        <p>Operating System: ${osInfo}</p>
        <p>Screen Width: ${screenWidth}px, Screen Height: ${screenHeight}px</p>
        <p>Available Width: ${availableWidth}px, Available Height: ${availableHeight}px</p>
        <p>Current Date: ${currentDate}</p>
        <p>Current Time: ${currentTime}</p>
    `;
}

displayInfo();
