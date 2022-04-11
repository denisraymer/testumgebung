import { CssBaseline, ThemeProvider } from "@mui/material"
import React from "react"
import { HashRouter, Navigate, Route, Routes } from "react-router-dom"

import { PageWrapper } from "@components"
import { theme } from "@constants"
import {
  LoginPage,
  NotFoundPage,
  SensorsPage,
  EchoRecordsPage,
  EquipmentsPage,
  ModesPage,
  SensorPage,
  EquipmentPage,
  AddingSensorPage,
  AddingEquipmentPage,
  ModePage,
  VirtualSensorPage,
  AddingVirtualSensorPage,
  SettingsPage,
  ExternalSensorPage,
  AddingModePage,
} from "./pages"

/**
 * @returns {React.FC} - FC
 */
const App: React.FC = () => (
  <HashRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Navigate to="/sensors" replace />} />
          <Route path="/sensors" element={<SensorsPage />} />
          <Route path="/sensors/:id" element={<SensorPage />} />
          <Route path="/sensors/adding" element={<AddingSensorPage />} />
          <Route
            path="/external-sensors/:id"
            element={<ExternalSensorPage />}
          />
          <Route path="/virtual-sensor/:id" element={<VirtualSensorPage />} />
          <Route
            path="/virtual-sensor/adding"
            element={<AddingVirtualSensorPage />}
          />
          <Route path="/echo-records" element={<EchoRecordsPage />} />
          <Route path="/equipment" element={<EquipmentsPage />} />
          <Route path="/equipment/:id" element={<EquipmentPage />} />
          <Route path="/equipment/adding" element={<AddingEquipmentPage />} />
          <Route path="/modes" element={<ModesPage />} />
          <Route path="/modes/:id" element={<ModePage />} />
          <Route path="/modes/adding" element={<AddingModePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  </HashRouter>
)

export default App
