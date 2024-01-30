export function getData() {
  return {
    stepData: [
      {
        id: 1,
        path: "",
        step: "choose event template",
        about:
          "Pick the type of event you want to create so we can tailor your needs",
      },
      {
        id: 2,
        path: "/event",
        step: "Event Information",
        about: "Tell us all we need to know about your event",
      },
      {
        id: 3,
        path: "/payment",
        step: "Payment Information",
        about: "Put in your payment information for withdrawing event payments",
      },
      {
        id: 4,
        path: "/invitation",
        step: "Send invite link",
        about:
          "Now that your event has been created, share your event link to fans, and members of your community",
      },
    ],
    templateData: [
      {
        id: 1,
        templateName: "Resturant Event",
        imgUrl: "/templateimages/mini restaurant template img.png",
        coverImg: "",
        imageAlt: "mini restaurant template image",
      },
      {
        id: 2,
        templateName: "Book Club",
        imgUrl: "/templateimages/book club.png",
        coverImg: "",
        imageAlt: "mini book club template image",
      },
      {
        id: 3,
        templateName: "Travel Event",
        imgUrl: "/templateimages/travel event.png",
        coverImg: "",
        imageAlt: "mini travel illustration image",
      },
      {
        id: 4,
        templateName: "Party Event",
        imgUrl: "/templateimages/party event.png",
        coverImg: "",
        imageAlt: "mini template image of a club party",
      },
      {
        id: 5,
        templateName: "Sport Event",
        imgUrl: "/templateimages/sport event.png",
        coverImg: "",
        imageAlt: "mini template illustration of sport",
      },
      {
        id: 6,
        templateName: "Game Night",
        imgUrl: "/templateimages/game night.png",
        coverImg: "",
        imageAlt: "mini image illustration of game night",
      },
      {
        id: 7,
        templateName: "Others",
        imgUrl: "/templateimages/others.png",
        coverImg: "",
        imageAlt: "image illustration of other event that can be added",
      },
    ],
  };
}
