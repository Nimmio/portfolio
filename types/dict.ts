export interface IDict {
  dashboard: {
    view_my_work: string;
    contact_me: string;
    featured_projects: string;
    view_all_projects: string;
    check_out_some_of_my_recent_work: string;
  };
  projects: {
    view_code: string;
    view_demo: string;
    sub_title: string;
    title: string;
  };
  skills: {
    title: string;
    sub_title: string;
    tabs: {
      frontend: {
        title: string;
        subtitle: string;
      };
      backend: {
        title: string;
        subtitle: string;
      };
      Database: {
        title: string;
        subtitle: string;
      };
      Other: {
        title: string;
        subtitle: string;
      };
    };
    levels: {
      Fundamental: string;
      Proficient: string;
      Expert: string;
    };
  };
  about_me: {
    sub_title: string;
    title: string;
    tabs: {
      experience: string;
      education: string;
    };
  };
}
