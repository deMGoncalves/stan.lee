import h, { Fragment } from '@cea/h'

export default ({ props }) => (
  <>
    <style>
      { props.generateCommonFlagStyles() }
      { props.generateDinamicFlagStyles() }
      { props.commonVitrineStyles }
    </style>
  </>
);
