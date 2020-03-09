import { Component } from 'preact';

export default class Image extends Component {
  render() {
    return (
      <picture className={`${this.props.className || ''}`}>
        <svg
          width="124"
          height="40"
          viewBox="0 0 124 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M65.4072 9.51897C62.5693 9.51897 59.7371 10.7947 57.4302 12.7893V12.0356C57.4302 10.8773 56.4913 9.93782 55.3333 9.93782H54.2845C53.1264 9.93782 52.1876 10.8773 52.1876 12.0356V37.366C52.1876 38.5247 53.1264 39.4638 54.2845 39.4638H55.3333C56.4913 39.4638 57.4302 38.5247 57.4302 37.366V17.6517C59.6018 15.7236 62.4284 14.5823 64.9767 14.5823C68.8378 14.5823 72.2222 16.8296 72.2327 22.0292V37.366C72.2327 38.5247 73.1716 39.4638 74.3296 39.4638H75.3776C76.536 39.4638 77.4753 38.5244 77.4749 37.3651L77.4697 22.0569C77.4697 14.2465 72.7372 9.51897 65.4072 9.51897ZM123.265 33.6189C123.265 32.6812 122.65 31.8877 121.801 31.619C122.211 30.8292 122.086 29.8326 121.423 29.1693C120.759 28.5061 119.763 28.3803 118.973 28.7909C118.705 27.9415 117.912 27.326 116.974 27.326C116.036 27.326 115.243 27.9415 114.975 28.7909C114.185 28.3803 113.188 28.5061 112.525 29.1693C111.862 29.8326 111.737 30.8292 112.146 31.619C111.298 31.8877 110.682 32.6812 110.682 33.6189C110.682 34.5567 111.298 35.3505 112.146 35.6188C111.737 36.4091 111.862 37.4056 112.525 38.069C113.188 38.7322 114.185 38.8579 114.975 38.4474C115.243 39.2964 116.036 39.9119 116.974 39.9119C117.912 39.9119 118.705 39.2964 118.973 38.4474C119.763 38.8579 120.759 38.7322 121.423 38.069C122.086 37.4056 122.211 36.4091 121.801 35.6188C122.65 35.3505 123.265 34.5567 123.265 33.6189ZM100.844 31.03C98.1988 33.7446 95.1953 35.1813 91.7678 35.1813C88.4855 35.1813 86.0968 33.374 86.0968 30.5746C86.0968 26.7854 90.2362 25.6558 93.2723 25.6558C95.7754 25.6558 98.3682 25.7889 100.844 26.1464V31.03ZM93.4207 9.51897C90.0692 9.51897 87.0435 10.5954 84.5109 12.2957C83.5168 12.9634 83.292 14.3326 84.0095 15.2912L84.5309 15.9867C85.1876 16.8636 86.4047 17.0807 87.3326 16.4982C89.1226 15.3761 91.1868 14.6841 93.4207 14.6841C97.764 14.6841 100.844 16.7505 100.844 21.2014V21.7943C98.3915 21.3249 95.9176 21.0335 93.4207 21.0335C86.4499 21.0335 81.2395 24.4288 81.2395 30.4877C81.2395 35.8559 85.5045 39.9119 91.4965 39.9119C94.9978 39.9119 98.1407 38.6535 100.844 36.2134V37.366C100.844 38.5247 101.782 39.4638 102.941 39.4638H103.99C105.148 39.4638 106.087 38.5247 106.087 37.366V21.1505C106.087 14.0769 101.074 9.51897 93.4207 9.51897ZM17.75 34.4818H12.5452V2.09778C12.5452 0.939066 11.6063 0 10.4478 0H4.6808C3.52234 0 2.58348 0.939066 2.58348 2.09778V2.88418C2.58348 4.0429 3.52234 4.98197 4.6808 4.98197H7.30211V34.4818H2.09688C0.938856 34.4818 0 35.4209 0 36.5792V37.366C0 38.5247 0.938856 39.4638 2.09688 39.4638H17.75C18.9084 39.4638 19.8473 38.5247 19.8473 37.366V36.5792C19.8473 35.4209 18.9084 34.4818 17.75 34.4818ZM41.7505 31.03C39.1044 33.7446 36.1018 35.1813 32.6742 35.1813C29.392 35.1813 27.0028 33.374 27.0028 30.5746C27.0028 26.7854 31.1426 25.6558 34.1789 25.6558C36.6814 25.6558 39.2745 25.7889 41.7505 26.1464V31.03ZM34.3271 9.51897C30.9752 9.51897 27.9499 10.5954 25.417 12.2957C24.4229 12.9634 24.1981 14.3326 24.916 15.2912L25.4369 15.9867C26.094 16.8636 27.3112 17.0807 28.2392 16.4982C30.0286 15.3761 32.0928 14.6841 34.3271 14.6841C38.6701 14.6841 41.7505 16.7505 41.7505 21.2014V21.7943C39.298 21.3249 36.8237 21.0335 34.3271 21.0335C27.356 21.0335 22.1459 24.4288 22.1459 30.4877C22.1459 35.8559 26.4105 39.9119 32.4029 39.9119C35.9039 39.9119 39.0475 38.6535 41.7505 36.2134V37.366C41.7505 38.5247 42.689 39.4638 43.8475 39.4638H44.8959C46.0544 39.4638 46.9932 38.5247 46.9932 37.366V21.1505C46.9932 14.0769 41.9793 9.51897 34.3271 9.51897Z"
              fill="#19194B"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="123.265" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </picture>
    );
  }
}
