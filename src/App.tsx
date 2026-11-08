import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { storyContent } from './content/story';
import { FloatingParticles } from './components/FloatingParticles';
import { CursorHeartTrail } from './components/CursorHeartTrail';
import { AudioPlayer } from './components/AudioPlayer';
import { ProgressIndicator } from './components/ProgressIndicator';
import { LoadingScreen } from './components/LoadingScreen';
import { EasterEggs } from './components/EasterEggs';
import { Footer } from './components/Footer';

// Scene components
import { Scene1GoodMorning } from './components/scenes/Scene1GoodMorning';
import { Scene2AboutLastNight } from './components/scenes/Scene2AboutLastNight';
import { Scene3TwoPaths } from './components/scenes/Scene3TwoPaths';
import { Scene4ParisIsBeautiful } from './components/scenes/Scene4ParisIsBeautiful';
import { Scene5LittleThings } from './components/scenes/Scene5LittleThings';
import { Scene6LetterToTotaa } from './components/scenes/Scene6LetterToTotaa';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [secretKissModalOpen, setSecretKissModalOpen] = useState(false);

  // Scroll to top whenever chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentChapter]);

  const goToNextChapter = () => {
    setCurrentChapter((prev) => Math.min(prev + 1, 6));
  };

  const restartStory = () => {
    setCurrentChapter(1);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blush-50 via-ivory-50 to-lavender-50 text-slate-800 selection:bg-blush-200 selection:text-blush-600 overflow-x-hidden">
      {/* Initial Heartfelt Loading Screen */}
      {isLoading && (
        <LoadingScreen
          onLoaded={() => setIsLoading(false)}
          message={storyContent.easterEggs.loadingMessage}
        />
      )}

      {/* Ambient background particles (hearts, petals, sparkles) */}
      <FloatingParticles />

      {/* Desktop Cursor heart trail */}
      <CursorHeartTrail />

      {/* Floating Audio Player (music box synthesizer or custom music.mp3) */}
      <AudioPlayer />

      {/* Chapter Progress Bar */}
      {!isLoading && (
        <ProgressIndicator
          currentChapter={currentChapter}
          totalChapters={6}
          onSelectChapter={(chap) => setCurrentChapter(chap)}
        />
      )}

      {/* Easter Egg: Corner 5-click heart */}
      <EasterEggs
        fiveClicksSecret={storyContent.easterEggs.fiveClicksSecret}
        hiddenKissSecret={storyContent.easterEggs.hiddenKissSecret}
      />

      {/* Secret Kiss Modal (triggered from footer or hidden spots) */}
      <AnimatePresence>
        {secretKissModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-xs w-full bg-white rounded-3xl p-6 shadow-2xl border border-blush-200 text-center"
            >
              <div className="text-4xl mb-3">💋</div>
              <h4 className="font-serif text-lg font-bold text-slate-800 mb-2">
                Secret Kiss!
              </h4>
              <p className="font-handwritten text-xl text-blush-600 mb-4">
                {storyContent.easterEggs.hiddenKissSecret}
              </p>
              <button
                onClick={() => setSecretKissModalOpen(false)}
                className="w-full py-2 rounded-full bg-blush-400 hover:bg-blush-500 text-white text-xs font-semibold"
              >
                Catch the kiss 💕
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Chapter Content with Smooth Page Transitions */}
      <main className="container mx-auto px-4 pt-20 pb-8 min-h-[90vh] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {currentChapter === 1 && (
            <motion.div
              key="scene-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Scene1GoodMorning
                onNext={goToNextChapter}
                greeting={storyContent.scene1.greeting}
                subtitle1={storyContent.scene1.subtitle1}
                subtitle2={storyContent.scene1.subtitle2}
                buttonText={storyContent.scene1.buttonText}
              />
            </motion.div>
          )}

          {currentChapter === 2 && (
            <motion.div
              key="scene-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Scene2AboutLastNight
                onNext={goToNextChapter}
                heading={storyContent.scene2.heading}
                paragraphs={storyContent.scene2.paragraphs}
                humorLine={storyContent.scene2.humorLine}
                buttonText={storyContent.scene2.buttonText}
              />
            </motion.div>
          )}

          {currentChapter === 3 && (
            <motion.div
              key="scene-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Scene3TwoPaths
                onNext={goToNextChapter}
                heading={storyContent.scene3.heading}
                intro={storyContent.scene3.intro}
                pathFrance={storyContent.scene3.pathFrance}
                pathEgypt={storyContent.scene3.pathEgypt}
                buttonText={storyContent.scene3.buttonText}
              />
            </motion.div>
          )}

          {currentChapter === 4 && (
            <motion.div
              key="scene-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Scene4ParisIsBeautiful
                onNext={goToNextChapter}
                line1={storyContent.scene4.line1}
                line2={storyContent.scene4.line2}
                line3={storyContent.scene4.line3}
                climaxHighlight={storyContent.scene4.climaxHighlight}
                reflection1={storyContent.scene4.reflection1}
                reflection2={storyContent.scene4.reflection2}
                buttonText={storyContent.scene4.buttonText}
              />
            </motion.div>
          )}

          {currentChapter === 5 && (
            <motion.div
              key="scene-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Scene5LittleThings
                onNext={goToNextChapter}
                heading={storyContent.scene5.heading}
                subtitle={storyContent.scene5.subtitle}
                cards={storyContent.scene5.cards}
                closing1={storyContent.scene5.closing1}
                closing2={storyContent.scene5.closing2}
                buttonText={storyContent.scene5.buttonText}
              />
            </motion.div>
          )}

          {currentChapter === 6 && (
            <motion.div
              key="scene-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Scene6LetterToTotaa
                onRestart={restartStory}
                salutation={storyContent.scene6.salutation}
                letterParagraphs={storyContent.scene6.letterParagraphs}
                signOff={storyContent.scene6.signOff}
                signatureName={storyContent.scene6.signatureName}
                finaleButtonText={storyContent.scene6.finaleButtonText}
                finale={storyContent.scene6.finale}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        onSecretFound={() => setSecretKissModalOpen(true)}
        footerText={storyContent.easterEggs.footerText}
      />
    </div>
  );
};

export default App;
