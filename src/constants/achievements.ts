type Achievement = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  link?: string;
};

type Category = {
  name: string;
  icon: "badge" | "trophy" | "medal" | "star";
  items: Achievement[];
};

export const achievementsData: Category[] = [
  {
    name: "Certifications & Tech",
    icon: "trophy",
    items: [
      {
        title: "Microsoft Certified: Azure Developer Associate",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/RahulGajbhiye201/2876E3DEC8A05F75?sharingId=BBBD6C8AF4378318",
      },
      {
        title: "Microsoft Certified: Azure Fundamentals",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/RahulGajbhiye201/1846D47E34B20944?sharingId=BBBD6C8AF4378318",
      },
      {
        title: "AWS Certified Cloud Practitioner",
        link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/JLDMTW1DYE1QQG3M",
      },
    ],
  },
  {
    name: "Life & Chill",
    icon: "medal",
    items: [
      {
        title: "2nd Place – 10K Marathon",
        description: "500+ participants",
        link: "https://www.linkedin.com/posts/rahulgajbhiye01_lifelessons-keepgoing-motivation-activity-7300832087882838017-FdoB?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwDz8IBeitvdFDoWzOIXhEjCjH8CRNlip0",
      },
    ],
  },
];
