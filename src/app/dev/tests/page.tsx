'use client';

import { useState } from 'react';

import StyledButton from '~/components/Styled/StyledButton';
import StyledCheckbox from '~/components/Styled/StyledCheckbox';

export default function TestsPageRSC() {
  const [isChecked, setIsChecked] = useState(true);

  return <main className="p-8 min-h-screen flex flex-col gap-4 items-start pt-[80px]">
    <StyledButton text="Default" />
    <StyledButton text="Primary" style="primary" />
    <StyledButton text="Secondary" style="secondary" />
    <StyledButton text="Transparent" style="transparent" />
    <StyledButton text="Inline" style="inline" />

    <StyledCheckbox isChecked={isChecked} setIsChecked={setIsChecked} label="dfdfsfds" />
  </main>;
}