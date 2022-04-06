import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

[faFacebookSquare, faTwitter, faPinterest, faInstagram].forEach((icon) => {
  library.add(icon);
});

dom.watch();
