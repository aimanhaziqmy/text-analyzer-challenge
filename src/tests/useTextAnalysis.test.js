import { renderHook, act } from '@testing-library/react';
import useTextAnalysis from '../hooks/useTextAnalysis';

describe('useTextAnalysis', () => {
    test('initial text should be empty', () => {
        const { result } = renderHook(() => useTextAnalysis());
        expect(result.current.text).toBe('');
        expect(result.current.analysis.wordCount).toBe(0);
    });

    test('text analysis with random text', () => {
        const { result } = renderHook(() => useTextAnalysis());

        act(() => {
            result.current.setText('This is some random text. Hello There.');
        })

        expect(result.current.text).toBe('This is some random text. Hello There.');
        expect(result.current.analysis.wordCount).toBe(7);
        expect(result.current.analysis.charCount).toBe(38);
        expect(result.current.analysis.sentenceCount).toBe(2);
    });

    test('text for sentiment analysis', () => {
        const { result } = renderHook(() => useTextAnalysis());

        act(() => {
            result.current.setText('I am very happy.');
        })
        expect(result.current.analysis.sentiment).toBe('Positive');

        act(() => {
            result.current.setText('I love this product. It is amazing.');
        })
        expect(result.current.analysis.sentiment).toBe('Positive');

        act(() => {
            result.current.setText('I hate this product. It is terrible.');
        })
        expect(result.current.analysis.sentiment).toBe('Negative');

        act(() => {
            result.current.setText('I am terrible, I lied to you.');
        })
        expect(result.current.analysis.sentiment).toBe('Negative');

        act(() => {
            result.current.setText('This is a neutral sentence.');
        })
        expect(result.current.analysis.sentiment).toBe('Neutral');
    });

    test('the frequent and the longest word', () => {
        const { result } = renderHook(() => useTextAnalysis());

        act(() => {
            result.current.setText('I am very very happy.');
        })
        expect(result.current.analysis.mostFrequentWord).toBe('very');
        expect(result.current.analysis.longestWord).toBe('happy');

    });
    
});

