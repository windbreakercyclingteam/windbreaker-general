import { useEffect, useState } from 'react';
import { Page, useCallProcedure } from '@kottster/react';

/**
 * Learn more about building custom pages:
 * https://kottster.app/docs/custom-pages/introduction
 */

export default () => {
  const callProcedure = useCallProcedure();

  return (
    <Page>
      <b>This is an empty page.</b> <br />
      Edit file <b>app/pages/calendar/index.jsx</b> to add content.
    </Page>
  );
};
