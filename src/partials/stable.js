import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import { stables } from '../constants';
const useStyles = makeStyles({
    popover: {
        pointerEvents: 'none',
    }
});

export default ({ x, y, stable, horseName }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handlePopoverOpen = (event) => {
        event.persist();
        console.log(event);
        setAnchorEl({
            position: {
                x: event.nativeEvent.x,
                y: event.nativeEvent.y
            },
            target: event.currentTarget
        });
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    console.log(anchorEl?.position?.y);
    return <g>
        <rect
            fill={stables[stable]?.color || 'none'}
            {
                ...{
                    ...y === 0 && { height: '50%', y: '50%' },
                    ...y === 10 && { height: '50%' },
                    ...x === 0 && { width: '50%', x: '50%' },
                    ...x === 10 && { width: '50%' }
                }
            }
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
        />
        <Popover
            id="mouse-over-popover"
            className={classes.popover}
            anchorReference="anchorPosition"
            open={open}
            anchorPosition={{ top: anchorEl?.position?.y, left: anchorEl?.position?.x }}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
        >
            {stable}<br/>{horseName}
      </Popover>
    </g>
}
