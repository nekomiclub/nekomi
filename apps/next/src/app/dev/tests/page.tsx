'use client';

import { useState } from 'react';

import StyledButton from '~/shared/components/styled/StyledButton';
import StyledCheckbox from '~/shared/components/styled/StyledCheckbox';



export default function TestsPageRSC() {
  const [isChecked, setIsChecked] = useState(true);

  return <main className="p-8 min-h-screen flex flex-col gap-4 items-start pt-[80px]">
    <StyledButton text="Default" />
    <StyledButton text="Disabled" color="primary" disabled />
    <StyledButton text="Primary" color="primary" />
    <StyledButton text="Loading" color="primary" isLoading />
    <StyledButton text="Secondary" color="secondary" />
    <StyledButton text="Loading" color="secondary" isLoading />
    <StyledButton text="Transparent" color="transparent" />
    <StyledButton text="Transparent" color="transparent" isLoading />
    <StyledButton text="Inline" color="inline" />
    <StyledButton text="Inline" color="inline" isLoading />

    <StyledCheckbox isChecked={isChecked} setIsChecked={setIsChecked} label="dfdfsfds" />
  </main>;
}