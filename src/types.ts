export interface PolaroidCard {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  altText: string;
  backMessage: string;
  rotation: string;
  sticker: string;
}

export interface StoryContent {
  metadata: {
    herName: string;
    herNickname: string;
    hisName: string;
    title: string;
    subtitle: string;
  };
  scene1: {
    greeting: string;
    subtitle1: string;
    subtitle2: string;
    buttonText: string;
  };
  scene2: {
    heading: string;
    paragraphs: string[];
    humorLine: string;
    buttonText: string;
  };
  scene3: {
    heading: string;
    intro: string;
    pathFrance: {
      location: string;
      tagline: string;
      description: string;
      details: string;
    };
    pathEgypt: {
      location: string;
      tagline: string;
      description: string;
      revealLines: string[];
    };
    buttonText: string;
  };
  scene4: {
    line1: string;
    line2: string;
    line3: string;
    climaxHighlight: string;
    reflection1: string;
    reflection2: string;
    buttonText: string;
  };
  scene5: {
    heading: string;
    subtitle: string;
    cards: PolaroidCard[];
    closing1: string;
    closing2: string;
    buttonText: string;
  };
  scene6: {
    salutation: string;
    letterParagraphs: string[];
    signOff: string;
    signatureName: string;
    finaleButtonText: string;
    finale: {
      line1: string;
      line2: string;
      line3: string;
      line4: string;
      restartButtonText: string;
    };
  };
  easterEggs: {
    fiveClicksSecret: string;
    hiddenKissSecret: string;
    loadingMessage: string;
    footerText: string;
  };
}
