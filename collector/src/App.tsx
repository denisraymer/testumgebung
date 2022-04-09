import React from 'react';

import { Button } from 'shared/lib';

export function App({tab}: {tab: string}) {
  return (
    <Button text="Текст кнопки">
      {tab}
    </Button>
  )
}
