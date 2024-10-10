// Function to sort items based on the given parameter
function Order(items, parameter) {
    const sortByTitle = (a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleA.localeCompare(titleB); // Use localeCompare for better readability
    };

    const sortByPriority = (a, b) => b.priority - a.priority; // Sort by priority in descending order

    // Determine the sorting method based on the parameter
    switch (parameter) {
        case 'title':
            items.sort(sortByTitle);
            break;
        case 'priority':
            items.sort(sortByPriority);
            break;
        default:
            console.warn(`Unknown sorting parameter: ${parameter}`);
    }

    return items; // Return the sorted items
}

export default Order;
