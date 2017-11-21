export const loadState = () => {
  try {
    const schedulesJson = localStorage.getItem('schedules');
    const typesJson = localStorage.getItem('types');
    const settingsJson = localStorage.getItem('settings');
    if (schedulesJson === null || settingsJson === null || typesJson === null) {
      return undefined;
    }

    const schedules = JSON.parse(schedulesJson);
    const types = JSON.parse(typesJson);
    const settings = JSON.parse(settingsJson);

    return {schedules, settings, types};
  } catch (err) {
    return undefined;
  }
};

export const saveState = ({schedules, types, settings}) => {
  try {
    const serializedSchedules = JSON.stringify(schedules);
    const serializedTypes = JSON.stringify(types);
    const serializedSettings = JSON.stringify(settings);

    localStorage.setItem('schedules', serializedSchedules);
    localStorage.setItem('types', serializedTypes);
    localStorage.setItem('settings', serializedSettings);
  } catch (err) {}
};
