import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

describe('TextField 요구사항 테스트', () => {
  it('className prop으로 설정한 css class가 적용된다', async () => {
    // Arrange
    await render(<TextField className="my-class" />);

    // Act
    const InputField = screen.getByPlaceholderText('텍스트를 입력해 주세요.');
    // Asert
    expect(InputField).toHaveClass('my-class');
  });

  it('placeholder를 작성하면 작성한 placeholder가 노출된다.', async () => {
    // Arrange
    await render(<TextField placeholder="placeholder 테스트" />);

    // Act
    const InputField = screen.getByPlaceholderText('placeholder 테스트');
    // Asert
    expect(InputField).toBeInTheDocument();
  });

  it('placeholder를 지정하지 않으면 "텍스트를 입력해 주세요."가 노출 된다.', async () => {
    // Arrange
    await render(<TextField />);

    // Act
    const InputField = screen.getByPlaceholderText('텍스트를 입력해 주세요.');
    // Asert
    expect(InputField).toBeInTheDocument();
  });
});
