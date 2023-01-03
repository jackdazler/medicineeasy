import React from 'react';
import CpNavBar from './components/component/cp-navbar/CpNavBar';
import CpVideoBanner from './components/component/cp-banner/CpVideoBanner';
import CpReview from './components/component/cp-review/CpReview';
// import CpVideoPlayer from './components/component/cp-videoplayer/CpVideoPlayer';
function App() {
  return (
    <div>
      <CpNavBar/>
      {/* <CpVideoPlayer/> */}
      <CpVideoBanner/>
      <CpReview/>
    </div>
  );
}

export default App;
