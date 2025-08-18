import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Certificate {
  title: string;
  category: string;
  link: string;
  image: string;
  date: string;
  description: string;
}
@Component({
  selector: 'app-certificates',
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class Certificates {
  certificates: Certificate[] = [
    {
      title: 'Frontend Department Manager',
      category: 'Sintac Code',
      link: 'https://drive.google.com/file/d/16CHieUi4AHaM9576pxGcaW-I-3ezOzyV/view?usp=sharing',
      image: 'images/sintac Code.png',
      date: 'Aug 23, 2023',
      description: 'Congratulations on your promotion to Frontend Department Manager!'
    },
    {
      title: 'Introduction to Front-End Development',
      category: 'Coursera',
      link: 'https://drive.google.com/file/d/1V2UigVIdeamqyhy-5-XC5rxPzk-cbiNi/view?usp=sharing',
      image: 'images/coursea 1.png',
      date: 'Feb 25, 2024',
      description: 'Coursera certifies successful completion of Introduction to Front-End Development.'
    },
    {
      title: 'Developing Front-End Apps with React',
      category: 'Coursera',
      link: 'https://drive.google.com/file/d/1ulY8YMz9P6vdc3hJwV_C-N47f_LMbved/view?usp=sharing',
      image: 'images/coursea 2.png',
      date: 'Apr 7, 2024',
      description: 'Coursera certifies successful completion of Developing Front-End Apps with React.'
    },
    {
      title: 'Fundamentals Of Frontend',
      category: 'Google Developer Student',
      link: 'https://drive.google.com/file/d/1qjHP7RCT916iUHQbnwEwS7hm_pflPfi_/view?usp=sharing',
      image: 'images/Google.png',
      date: 'Sep 10, 2023',
      description: 'Successful graduate of the Fundamentals of Frontend program.'
    },
    {
      title: 'Started with ReactJS Components',
      category: 'simplilearn',
      link: 'https://drive.google.com/file/d/1ezke6xcoEsIC3EohaMdufdLFpVGQCDlm/view?usp=sharing',
      image: 'images/simple.png',
      date: 'Apr 08, 2024',
      description: 'Completed the Getting Started with ReactJS Components course.'
    },
    {
      title: 'ReactJS for Beginners',
      category: 'simplilearn',
      link: 'https://drive.google.com/file/d/1vZtucmfS6D4FKowkZbyqSk-UYl9tHUhi/view?usp=sharing',
      image: 'images/simple 2.png',
      date: 'Apr 08, 2024',
      description: 'Successfully completed ReactJS for Beginners course.'
    },
    {
      title: 'The forgotten art of spacing',
      category: 'Ma3aref',
      link: 'https://drive.google.com/file/d/1IBhe0nQKa8SbRtahINN61CWgHPSDOCdL/view?usp=sharing',
      image: 'images/ma3rfa.png',
      date: 'May 16, 2023',
      description: 'Ma3aref Platform Certificate completion.'
    },
    {
      title: 'React JS Tutorial',
      category: 'Great Learning',
      link: 'https://drive.google.com/file/d/1FO3RLMRYReG6lIvkW7CGORzZjxF0tn6k/view?usp=sharing',
      image: 'images/creat learn.png',
      date: 'Apr 12, 2024',
      description: 'Successfully completed React JS Tutorial.'
    },
    {
      title: 'React JS',
      category: 'Maharatech ITI',
      link: 'https://drive.google.com/file/d/1nC0jVZO7ZuGVLUk7vBOOd3Idm7HV-GJa/view?usp=sharing',
      image: 'images/react iti .png',
      date: 'Apr 15, 2024',
      description: 'Completed React JS course at ITI.'
    },
    {
      title: 'HTML & CSS',
      category: 'Maharatech ITI',
      link: 'https://drive.google.com/file/d/1dYlVGmS8WLpCT-TtWQgDeQSnlNnUCMBV/view?usp=sharing',
      image: 'images/ITI 1.png',
      date: 'Sep 6, 2022',
      description: 'Completed HTML & CSS course at ITI.'
    }
  ];
}
