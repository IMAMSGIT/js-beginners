const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function stop() {
  console.log(this);
};
video.play();

// if function is a member of the object
// this means the whole object

function playVideo() {
  console.log(this);
}

playVideo();

// in general function, this reference to
// global in node

function Video(title) {
  this.title = title;
  console.log(this);
}
const v = new Video("b");
// for constructor function, it creats a new object

const audio = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

audio.showTags();
