'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .25rem;
  background: var(--white);
  color: black;
  font-size: 1rem;
  font-weight: 600;
`;
