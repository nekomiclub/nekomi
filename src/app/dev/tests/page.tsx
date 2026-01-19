'use client';

import StyledButton from '~/components/Styled/StyledButton';

export default function TestsPageRSC() {
  return <main className="p-8 min-h-screen flex flex-col gap-4 items-start pt-[80px]">
    <StyledButton text="Default" />
    <StyledButton text="Primary" style="primary" />
    <StyledButton text="Secondary" style="secondary" />
    <StyledButton text="Transparent" style="clear" />
    <StyledButton text="Inline" style="clear" />
  </main>;
}