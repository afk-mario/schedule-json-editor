export const loadState = () => {
  try {
    const schedulesJson = localStorage.getItem('schedules');
    const statesJson = localStorage.getItem('states');
    const settingsJson = localStorage.getItem('settings');
    if (
      schedulesJson === null ||
      settingsJson === null ||
      statesJson === null
    ) {
      return undefined;
    }

    const schedules = JSON.parse(schedulesJson);
    const states = JSON.parse(statesJson);
    const settings = JSON.parse(settingsJson);

    return { schedules, settings, states };
  } catch (err) {
    return undefined;
  }
};

export const saveState = ({ schedules, states, settings }) => {
  try {
    const serializedSchedules = JSON.stringify(schedules);
    const serializedStates = JSON.stringify(states);
    const serializedSettings = JSON.stringify(settings);

    localStorage.setItem('schedules', serializedSchedules);
    localStorage.setItem('states', serializedStates);
    localStorage.setItem('settings', serializedSettings);
  } catch (err) {}
};
