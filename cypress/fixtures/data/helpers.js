class Helpers {
  getRandText(length) {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  getRandNum0To8(length) {
    let text = "";
    let possible = "012345678";

    for (let i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  getRandNum0To6(length) {
    let text = "";
    let possible = "0123456";

    for (let i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}

export default new Helpers();
