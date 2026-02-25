'use client';

import { useState } from 'react';

import StyledButton from '~/components/styled/StyledButton';
import StyledCheckbox from '~/components/styled/StyledCheckbox';



export default function TestsPageRSC() {
  const [isChecked, setIsChecked] = useState(true);

  return <main className="p-8 min-h-screen flex flex-col gap-4 items-start pt-[80px]">
    <StyledButton text="Default" />
    <StyledButton text="Disabled" style="primary" disabled />
    <StyledButton text="Primary" style="primary" />
    <StyledButton text="Loading" style="primary" isLoading />
    <StyledButton text="Secondary" style="secondary" />
    <StyledButton text="Loading" style="secondary" isLoading />
    <StyledButton text="Transparent" style="transparent" />
    <StyledButton text="Transparent" style="transparent" isLoading />
    <StyledButton text="Inline" style="inline" />
    <StyledButton text="Inline" style="inline" isLoading />

    <StyledCheckbox isChecked={isChecked} setIsChecked={setIsChecked} label="dfdfsfds" />
  </main>;
}