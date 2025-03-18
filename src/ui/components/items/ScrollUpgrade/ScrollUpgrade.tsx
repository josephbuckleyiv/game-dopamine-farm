
const ScrollUpgrade = ({ price, upgradeAmount, notification }) => {

    return (setDopamine, scrollValue, current) => {
        if (current - price < 0) { notification(); return };
        setDopamine(x => x - price);
        scrollValue.current += upgradeAmount;
    }
}

export default ScrollUpgrade;