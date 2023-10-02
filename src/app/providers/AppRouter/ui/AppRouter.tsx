import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'app/config/routes/routConfig';

const AppRouter = () => {
  return (
    <div>
      <Suspense fallback="loading...">
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export { AppRouter };
