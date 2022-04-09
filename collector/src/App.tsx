import React, { Fragment } from 'react';

import { Button } from 'shared';

export function App({ tab }: { tab: string }) {
  return (
    <Fragment>
      <h1>TEST</h1>
      <Button text="Текст кнопки">
        {tab}
      </Button>
    </Fragment>
  )
}
