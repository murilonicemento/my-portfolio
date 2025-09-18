import React from "react";
import { Heart, Code } from "lucide-react";
import SpotifyWidget from "./SpotifyWidget";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spotify Widget */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <span className="text-green-400 mr-2">♪</span>
              Ouvindo no Momento
            </h3>
          </div>
          <div className="max-w-md mx-auto">
            <SpotifyWidget />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <Code size={16} className="mr-2 text-purple-400" />
            <span>Feito com React & TypeScript</span>
          </div>

          <div className="flex items-center text-gray-400">
            <span>Feito com</span>
            <Heart
              size={16}
              className="mx-2 text-red-400"
              fill="currentColor"
            />
            <span>por Murilo</span>
          </div>

          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2025 Murilo Nascimento. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
