const audio = {
  title: "a",
  tags: ["a", "b", "c"],
  //   showTags() {
  //     const self = this;
  //     this.tags.forEach(function (tag) {
  //       console.log(self.title, tag);
  //     }, this);
  //   },

  //another solution by binfd method
  // showTags() {
  //   this.tags.forEach(
  //     function (tag) {
  //       console.log(this.title, tag);
  //     }.bind(this)
  //   );
  // },
  //from ECMA 6 , this method adopted (best)
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};
audio.showTags();

// this approach highly not recommended

function playVideo() {
  console.log(this);
}

playVideo.call({ name: "Mosh" });
playVideo.apply({ name: "Mosh" });
playVideo.bind({ name: "Mosh" })();

playVideo();
