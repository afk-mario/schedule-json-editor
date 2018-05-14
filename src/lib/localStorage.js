import axios from 'axios';

export const loadState = ({ schedules, states, settings }) => {
  console.log("loadState");
  try {
    console.log("---> LOCAL STORAGE");

    if (
      schedules === null || schedules === undefined ||
      states === null || states === undefined ||
      settings === null || settings === undefined
    ) {

      // LOCAL STORAGE
      const schedulesJson = localStorage.getItem('schedules');
      const statesJson = localStorage.getItem('states');
      const settingsJson = localStorage.getItem('settings');

      schedules = JSON.parse(schedulesJson);
      states = JSON.parse(statesJson);
      settings = JSON.parse(settingsJson);

      console.log(schedules);
      console.log(states);
      console.log(settings);
    }

    return { schedules, settings, states };

  } catch (err) {
    return undefined;
  }
};

export const saveState = ({ schedules, states, settings }) => {
  console.log("saveState");

  try {

    // check for content
    if (schedules == null || schedules.length <= 0 || states == null || states.length <= 0) return;

    console.log(schedules);
    console.log(states);
    console.log(settings);

    const serializedSchedules = JSON.stringify(schedules);
    const serializedStates = JSON.stringify(states);
    const serializedSettings = JSON.stringify(settings);

    // send to server
    // axios.post("http://192.168.86.30:3000/schedule/data",{
    axios.post("/schedule/data",{
      schedules: serializedSchedules,
      states: serializedStates,
      settings: serializedSettings
    }).then((response)=> {
      console.log("Data submitted successfully");
    }).catch((error)=> {
      console.log("got errr while posting data", error);
    });

    localStorage.setItem('schedules', serializedSchedules);
    localStorage.setItem('states', serializedStates);
    localStorage.setItem('settings', serializedSettings);
  } catch (err) {}
};
