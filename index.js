
/**
 * within
 */

module.exports = within

/**
 * Check if an event came from inside of a given element
 *
 * @param object the event object
 * @param Element the element in question
 * @param string the fallback property if relatedTarget is not defined
 * @return boolean
 */

function within (evt, elem, fallback) {
  var targ = evt.relatedTarget, ret;
  if (targ == null) {
    targ = evt[fallback] || null;
  }
  try {
    while (targ && targ !== elem) {
      targ = targ.parentNode;
    }
    ret = (targ === elem);
  } catch(e) {
    ret = false;
  }
  return ret;
}
