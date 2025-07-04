"use client";

import { useState, useEffect } from "react";
import { getAgeGroups, getAgeGroupByIndex } from "./lib/songs";
import { AgeGroup } from "./types/song";

export default function Home() {
  const [selectedAgeIndex, setSelectedAgeIndex] = useState(1); // デフォルトで80代
  const [ageGroupData, setAgeGroupData] = useState<AgeGroup | null>(null);
  const ageGroups = getAgeGroups();

  useEffect(() => {
    const data = getAgeGroupByIndex(selectedAgeIndex);
    setAgeGroupData(data || null);
  }, [selectedAgeIndex]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAgeIndex(parseInt(event.target.value));
  };

  const handleIncrement = () => {
    if (selectedAgeIndex > 0) {
      setSelectedAgeIndex(selectedAgeIndex - 1);
    }
  };

  const handleDecrement = () => {
    if (selectedAgeIndex < ageGroups.length - 1) {
      setSelectedAgeIndex(selectedAgeIndex + 1);
    }
  };

  const getAgeLabel = (index: number) => {
    const ageGroup = ageGroups[index];
    return `${ageGroup}歳代`;
  };

  return (
    <main className="min-h-screen bg-[#121212] text-[#EDEDED]">
      <div className="mx-auto max-w-screen-md p-4 sm:p-6 space-y-6">
        {/* ヘッダー */}
        <header className="text-center">
          <h1 className="text-2xl font-bold text-[#EDEDED]">名曲年代ガイド</h1>
        </header>

        {/* 年代選択セクション */}
        <section className="space-y-2">
          {/* スライダーとボタン */}
          <div className="flex items-end justify-center space-x-4">
            <div className="flex items-center">
              <button
                onClick={handleIncrement}
                disabled={selectedAgeIndex === 0}
                className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-indigo-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="年代を上げる"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <div
              className="relative flex-1 max-w-md slider-container"
              style={{ paddingBottom: "9px" }}
            >
              {/* 年代ラベル */}
              <div className="text-center mb-1">
                <h2 className="text-xl font-semibold text-[#EDEDED]">
                  {getAgeLabel(selectedAgeIndex)}
                </h2>
              </div>
              <input
                type="range"
                min="0"
                max={ageGroups.length - 1}
                value={selectedAgeIndex}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #4F46E5 0%, #4F46E5 ${
                    (selectedAgeIndex / (ageGroups.length - 1)) * 100
                  }%, #374151 ${
                    (selectedAgeIndex / (ageGroups.length - 1)) * 100
                  }%, #374151 100%)`,
                }}
              />
            </div>

            <div className="flex items-center">
              <button
                onClick={handleDecrement}
                disabled={selectedAgeIndex === ageGroups.length - 1}
                className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-indigo-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="年代を下げる"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* コメント表示 */}
        {ageGroupData && (
          <section className="text-left">
            <p className="text-sm leading-relaxed text-gray-400">
              {ageGroupData.comment}
            </p>
          </section>
        )}

        {/* 楽曲リスト */}
        {ageGroupData && (
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-[#EDEDED]">曲</h3>
            <div className="space-y-3">
              {ageGroupData.songs.map((song, index) => (
                <div
                  key={index}
                  className="bg-[#1E1E1E] p-4 rounded-xl border border-[#2A2A2A] shadow-md card-hover"
                >
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-[#EDEDED]">
                      {song.title}
                    </h4>
                    <p className="text-sm text-gray-400">{song.artist}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>{song.year}年</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {song.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #4f46e5;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #4f46e5;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </main>
  );
}
