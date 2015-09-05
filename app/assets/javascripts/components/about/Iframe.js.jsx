var Iframe = React.createClass({
  render: function() {
    return (
      <div className="centered">
        <iframe width={this.props.width} height={this.props.height} src={this.props.src} frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }
});

// https://youtu.be/embed/uTmskGjgmDA?t=2604
// https://www.youtube.com/embed/uTmskGjgmDA?
// t=2604

// function onYouTubeIframeAPIReady() {
//   var player;
//   player = new YT.Player('player', {
//     width: 1280,
//     height: 720,
//     videoId: 'M7lc1UVf-VE',
//     events: {
//       'onReady': onPlayerReady,
//       'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
//       'onStateChange': onPlayerStateChange,
//       'onError': onPlayerError
//     }
//   });
// }

// function onPlayerReady(event) {
//   event.target.setVolume(100);
//   event.target.playVideo();
// }
