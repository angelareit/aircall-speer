export function organizeCallsByDateWithArchived(calls) {
  const organizedCalls = {};

  calls.forEach((call) => {
    if (call.call_type) {
      const date = new Date(call.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      if (!organizedCalls[date]) {
        organizedCalls[date] = [];
      }
      organizedCalls[date].push(call);
    }
  });

  console.log('HERE', organizedCalls);
  return organizedCalls;
};

export function organizeCallsByDateNoArchived(calls) {
  const organizedCalls = {};

  calls.forEach((call) => {
    if (!call.is_archived) {
      const date = new Date(call.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      if (!organizedCalls[date]) {
        organizedCalls[date] = [];
      }
      organizedCalls[date].push(call);
    }
  });
  console.log('HERE2222', organizedCalls);

  return organizedCalls;
};
