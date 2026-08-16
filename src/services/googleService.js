export async function saveOrder(order) {

    try {

        const formData = new FormData();

        // Remove File objects from the JSON payload
        const orderWithoutFiles = {

            ...order,

            items: order.items.map(item => ({

                ...item,

                photos: item.photos.length

            }))

        };

        // Send order as JSON
        formData.append(
            "order",
            JSON.stringify(orderWithoutFiles)
        );

        // Send all image files
        order.items.forEach((item, itemIndex) => {

            item.photos.forEach((file, photoIndex) => {

                formData.append(

                    `photo_${itemIndex}_${photoIndex}`,

                    file,

                    file.name

                );

            });

        });

        const response = await fetch(
            "/api/orders",
            {
                method: "POST",
                body: formData
            }
        );
        
        return await response.json();

    } catch (error) {

        console.error(error);

        return {

            success: false,

            error: error.message

        };

    }

}