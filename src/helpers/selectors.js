export function organizeCallsByDate (calls) {
  const organizedCalls = {};

  calls.forEach((call) => {
    const date = new Date(call.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    if (!organizedCalls[date]) {
      organizedCalls[date] = [];
    }
    organizedCalls[date].push(call);
  });

  return organizedCalls;
};

export function organizeCallsByDateNotArchived(calls) {
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

  return organizedCalls;
};
