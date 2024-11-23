import { renderHook, act } from '@testing-library/react';
import useTextAnalysis from '../hooks/useTextAnalysis';

describe('useTextAnalysis', () => {
    test('initial text should be empty', () => {
        const { result } = renderHook(() => useTextAnalysis());
        expect(result.current.text).toBe('');
        expect(result.current.analysis.wordCount).toBe(0);
    })
});
